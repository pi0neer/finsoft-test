<template>
    <v-data-table
            :headers="tableHeaders"
            :items="tableData"
            hide-actions
            id="table"
    >
        <template v-slot:items="props">
            <tr :class="`row-${props.index}`">
                <td class="text-xs-center">{{ props.item.name }}</td>
                <td class="text-xs-center">{{ '$' + usdPrice(props.item.priceUsd) }}</td>
                <td class="text-xs-center hidden-sm-and-down">{{ '$' + shortenNumber(props.item.marketCapUsd) }}</td>
                <td class="text-xs-center hidden-sm-and-down">{{ '$' + shortenNumber(props.item.volumeUsd24Hr) }}</td>
            </tr>
        </template>
    </v-data-table>
</template>

<script>
    const axios = require('axios');

    export default {
        name: 'Table',
        data() {
            return {
                headersDesktop: [
                    {text: 'Название', align: 'center', sortable: false},
                    {text: 'Стоимость', align: 'center', sortable: false},
                    {text: 'Рыночная капитализация', align: 'center', sortable: false},
                    {text: 'Суточный объем', align: 'center', sortable: false},
                ],
                headersMobile: [
                    {text: 'Название', align: 'center', sortable: false},
                    {text: 'Стоимость', align: 'center', sortable: false},
                ],
                tableData: [],
                currencyNames: [],
            }
        },
        methods: {
            usdPrice(price) {
                if (price > 1) {
                    return Number(price).toFixed(2)
                } else {
                    return Number(price).toFixed(8)
                }
            },
            shortenNumber(number) {
                if (number > 10 ** 9) {
                    let shortNumber = ((Math.trunc(number)) / 10 ** 9).toFixed(2)
                    return shortNumber + 'b'
                } else if (number > 10 ** 6) {
                    let shortNumber = ((Math.trunc(number)) / 10 ** 6).toFixed(2)
                    return shortNumber + 'm'
                } else return number
            },

        },
        computed: {
            tableHeaders() {
                if (this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm) return this.headersMobile
                else return this.headersDesktop
            },
        },
        mounted() {
            axios
                .get('https://api.coincap.io/v2/assets')
                .then(response => {
                    this.tableData = response.data.data.filter((currency) => currency.rank <= 15)
                    this.currencyNames = this.tableData.map((currency) => currency.name)
                });
            const prices = new WebSocket('wss://ws.coincap.io/prices?assets=ALL')
            prices.onmessage = (msg) => {
                let data = JSON.parse(msg.data)
                this.currencyNames.forEach((name, index, names) => {
                    let lowerCasedName = name.toLowerCase()
                    if (data.hasOwnProperty(lowerCasedName)) {
                        let copy = this.tableData[index]
                        let oldPrice = this.usdPrice(copy.priceUsd)
                        let newPrice = this.usdPrice(data[lowerCasedName])
                        if (oldPrice > newPrice) {
                            document.querySelector(`.row-${index}`).classList.add("flash-red");
                            setTimeout(() => {
                                document.querySelector(`.row-${index}`).classList.remove("flash-red");
                            }, 1000)
                        } else if (oldPrice !== newPrice) {
                            document.querySelector(`.row-${index}`).classList.add("flash-green");
                            setTimeout(() => {
                                document.querySelector(`.row-${index}`).classList.remove("flash-green");
                            }, 1000)
                        }
                        copy.priceUsd = data[lowerCasedName]
                        this.$set(this.tableData, index, copy)
                    }
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    #table {
        tbody {
            &:hover {
                visibility: visible;
            }

            display: block;
            height: 80vh;
            overflow-y: scroll;
            visibility: hidden;

            td {
                &:nth-child(3) {
                    padding: 0 0 0 15px !important;
                }

                &:nth-child(4) {
                    padding: 0 0 0 28px !important;
                }
            }
        }

        tr {
            visibility: visible;
            display: table;
            width: 100%;
            table-layout: fixed;
        }
    }

    @keyframes backgroundRed {
        from {
            background-color: white;
        }
        to {
            background-color: rgba(255, 0, 0, .3);
        }
    }

    @keyframes backgroundGreen {
        from {
            background-color: white;
        }
        to {
            background-color: rgba(0, 255, 0, .3);
        }
    }

    .flash {
        &-green {
            animation: backgroundGreen .5s 2 alternate ease;
        }

        &-red {
            animation: backgroundRed .5s 2  alternate ease;
        }
    }

    @media screen and (max-width: 960px) {
        #table {
            tbody {
                td {
                    &:nth-child(2) {
                        padding: 0 0 0 25px !important;
                    }

                    &:nth-child(1) {
                        padding: 0 0 0 5px !important;
                    }
                }
            }
        }
    }

    @media screen and (min-width: 961px) {
        #table {
            tbody {
                td {
                    &:nth-child(2) {
                        padding: 0 0 0 10px !important;
                    }
                }
            }
        }
    }
</style>

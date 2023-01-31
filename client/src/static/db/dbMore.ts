import {IMoreItem} from "../types/types";
const url = 'https://www.tinkoff.ru'

export const dbMore: IMoreItem[] = [
    {
        title: 'ATM Machines',
        description: 'Search for us ATMS and other banks on the map',
        iconName: 'account-balance',
        link: url+'/maps/atm/',
    },
    {
        title: 'Top-up points',
        description: 'Cash replenishment in dollars, euros',
        iconName: 'credit-card',
        link: url+'/maps/payment/',
    },
    {
        title: 'Ordering certificates',
        description: 'Account statements by e-mail and in paper from',
        iconName: 'find-in-page',
        link: url+'/cards/debit-cards/tinkoff-black/help/get-statement/reference/',
    },
    {
        title: 'For business',
        description: 'Online banking for small businesses',
        iconName: 'business',
        link: url+'/business/',
    },
]

import React from 'react'

export function formatDateString(dateString) {
    const date = new Date(dateString);
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

  return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`
}

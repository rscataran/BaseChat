import React from 'react';

export function Events({ events }) {
    return (
        <ul>
            {
                events.toReversed().map((event, index) =>
                    <li key={index}>{event}</li>
                )
            }
        </ul>
    );
}
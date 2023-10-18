import { component$, useStylesScoped$ } from '@builder.io/qwik';
import moment from 'moment';
import styles from './events.scss?inline';
import { Button } from '../Button/button';

export default component$(() => {

  useStylesScoped$(styles);

  const events = [
    {
      name: 'A new way of thinking',
      date: { month: 10, day: 10, year: 2023 },
      location: 'In House',
      //create function to update this automatically
      occurred: true,
    },
    {
      name: 'Technology in 2024',
      date: { month: 9, day: 3, year: 2023 },
      location: 'Beckenstreet 21',
      occurred: false,
    },
    {
      name: 'The digital era — what is it?',
      date: { month: 9, day: 4, year: 2023 },
      location: 'Beckenstreet 21',
      occurred: false,
    },

    {
      name: 'Building brands and products',
      date: { month: 11, day: 21, year: 2023 },
      location: 'In House',
      occurred: false,
    },
    {
      name: 'Ecommerce 101',
      date: { month: 1, day: 7, year: 2024 },
      location: 'Hillway Drive 28',
      occurred: false,
    },
    {
      name: 'Crafting digital experiences',
      date: { month: 1, day: 28, year: 2024 },
      location: 'Taunton Fairway 4',
      occurred: false,
    },
    {
      name: 'A new way of thinking',
      date: { month: 10, day: 10, year: 2023 },
      location: 'In House',
      occurred: true,
    },
    {
      name: 'Technology in 2024',
      date: { month: '09', day: '03', year: 2023 },
      location: 'Beckenstreet 21',
      occurred: true,
    },
    {
      name: 'The digital era — what is it?',
      date: { month: 9, day: 4, year: 2023 },
      location: 'Beckenstreet 21',
      occurred: true,
    },
    {
      name: 'Building brands and products',
      date: { month: 11, day: 21, year: 2023 },
      location: 'In House',
      occurred: false,
    },
    {
      name: 'Ecommerce 101',
      date: { month: 1, day: 7, year: 2024 },
      location: 'Hillway Drive 28',
      occurred: false,
    },
    {
      name: 'Crafting digital experiences',
      date: { month: 1, day: 28, year: 2024 },
      location: 'Taunton Fairway 4',
      occurred: false,
    },
  ];

  return (
    <section class='events section--medium--margin'>
      <h2 class='events__title'>See our talks</h2>

      <ul class='events__list'>
        {events
          //  .sort((a,b) => moment(`${a.date.year a.date.month a.date.day}`) - moment(`${b.date.year b.date.month b.date.day}`) )
          .map((event, index) =>
            event.occurred == true ? (
              <li key={index} class='events__list--item page-grid occurred'>
                <span class='col-1--span-5'>{event.name}</span>
                <time class='col-6--span-5'>
                  {moment(
                    `${event.date.year}${event.date.month
                      .toString()
                      .padStart(2, '0')}${event.date.day
                      .toString()
                      .padStart(2, '0')}`
                  ).format('MMMM DD YYYY')}
                </time>
                <span class='col-11--span-2'>{event.location}</span>
              </li>
            ) : (
              <li key={index} class='events__list--item page-grid'>
                <span class='col-1--span-5'>{event.name}</span>
                <time class='col-6--span-5'>
                  {moment(
                    `${event.date.year}${event.date.month
                      .toString()
                      .padStart(2, '0')}${event.date.day
                      .toString()
                      .padStart(2, '0')}`
                  ).format('MMMM DD YYYY')}
                </time>
                <span class='col-11--span-2'>{event.location}</span>
              </li>
            )
          )}
      </ul>

      <Button
          text='More talks'
          styles='dark button col-10--span-3'
          linkTo='/talks'
        />
    
    </section>
  );
});

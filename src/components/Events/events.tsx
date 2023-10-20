import {
  component$,
  useStylesScoped$,
  useVisibleTask$,
} from '@builder.io/qwik';
import moment from 'moment';
import styles from './events.scss?inline';
import { Button } from '../Button/button';
import gsap from 'gsap';

export default component$(() => {
  useStylesScoped$(styles);

  useVisibleTask$(() => {
    const tl = gsap.timeline({
      defaults: {
        opacity: 0,
        ease: 'linear',
      },
    });

    tl.from('.events__title', {
      y: -8,
      duration: 0.5,
    })

      .from(
        '.events__list li hr',
        {
          scaleX: 0,
          transformOrigin: 'center left',
          stagger: 0.05,
          duration: 1.5,
        },
        '>'
      )
      .from(
        '.events__list li .events__list--item-title',
        {
          delay: 0.25,
          y: -8,
          stagger: 0.05,
          duration: 0.5,
        },
        '<'
      )
      .from(
        '.events__list li .events__list--item-date',
        {
          y: -8,
          delay: 0.25,
          stagger: 0.05,
          duration: 0.5,
        },
        '<'
      )
      .from(
        '.events__list li .events__list--item-location',
        {
          y: -8,
          delay: 0.35,
          stagger: 0.05,
          duration: 0.5,
        },
        '<'
      )
      .from(
        '.button',
        {
          delay: 0.5,
          y: -8,
          duration: 0.5,
        },
        '<'
      );
  });

  const events = [
    {
      name: 'Breaking through the brand blahs',
      date: { month: 12, day: 10, year: 2023 },
      location: 'Beckenstreet 21',
      occurred: true,
    },
    {
      name: 'Technology in 2023',
      date: { month: 10, day: 3, year: 2022 },
      location: 'In House',
      occurred: false,
    },
    {
      name: 'Large Language Models — what are they?',
      date: { month: 12, day: 4, year: 2023 },
      location: 'In House',
      occurred: false,
    },

    {
      name: 'Create award winning experiences',
      date: { month: 11, day: 12, year: 2023 },
      location: 'Beckenstreet 21',
      occurred: false,
    },
    {
      name: 'Ecommerce 101',
      date: { month: 1, day: 7, year: 2024 },
      location: 'Taunton Fairway 4',
      occurred: false,
    },
    {
      name: 'Crafting your brand Identity',
      date: { month: 3, day: 16, year: 2024 },
      location: 'Hillway Drive 28',
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
      name: 'Art Direction & Design Leadership',
      date: { month: 2, day: 12, year: 2024 },
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

  function checkEventOccurance() {
    const todaysDate = new Date();

    /*  check to see if event has already occured */
    events.map((event) => {
      const pickedDate = `${event.date.month
        .toString()
        .padStart(2, '0')} ${event.date.day
        .toString()
        .padStart(2, '0')} ${event.date.year.toString()}`;

      event.occurred = Number(todaysDate) > Date.parse(pickedDate);
    });

    /* sort list */
    events
      .sort((a, b) => +a.date.month - +b.date.month)
      .sort((a, b) => +a.date.day - +b.date.day)
      .sort((a, b) => +a.date.year - +b.date.year)
      .sort((a, b) => +a.occurred - +b.occurred);
  }

  checkEventOccurance();

  return (
    <section class='events section--medium--margin'>
      <h2 class='events__title'>See our talks</h2>

      <ul class='events__list'>
        {events.map((event, index) => (
          <li
            key={index}
            class={[
              { occurred: event.occurred },
              'events__list--item',
              'page-grid',
            ]}
          >
            <hr />
            <span class='col-1--span-6 events__list--item-title'>
              {event.name}
            </span>
            <time class='col-7--span-3 events__list--item-date'>
              {moment(
                `${event.date.year}${event.date.month
                  .toString()
                  .padStart(2, '0')}${event.date.day
                  .toString()
                  .padStart(2, '0')}`
              ).format('MMMM DD YYYY')}
            </time>
            <span class='col-10--span-3 events__list--item-location'>
              {event.location}
            </span>
          </li>
        ))}
      </ul>

      <Button
        text='More talks'
        styles='dark button col-10--span-3'
        linkTo='/talks'
      />
    </section>
  );
});

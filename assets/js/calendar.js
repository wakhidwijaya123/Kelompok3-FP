
  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid', 'timeGrid', 'list', 'bootstrap' ],
      timeZone: 'UTC',
      themeSystem: 'bootstrap',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
      },
      weekNumbers: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {"title":"Lomba Masak","start":"2019-07-01"},
        {"title":"Lari Maraton","start":"2019-07-07","end":"2019-07-10"}
      ]
    });

    calendar.render();
  });


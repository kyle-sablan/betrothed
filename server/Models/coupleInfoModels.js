const axios = require('axios');

const months = [
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
  'December',
];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const ordinals = ['st', 'nd', 'rd', 'th'];

const makeDate = () => {};

module.exports = {
  readCoupleData: function (eventID, success, error) {
    axios
      .get(`https://betrothed-server.herokuapp.com/api/events/${eventID}`)
      .then((result) => {
        const {
          coupleName1,
          coupleName2,
          date,
          venue,
          addressLine1,
          addressLine2,
          city,
          state,
          zip,
          rsvpDeadline,
          inviteMessage,
          bannerPhotoURL,
          galleryPhotos,
          colors,
        } = result.data;

        // create time string pieces for clean representation
        const eventTime = new Date(date);
        const rsvpTime = new Date(rsvpDeadline);
        const eventTimeParts = eventTime.toLocaleTimeString().split(':00 ');

        const transformedData = {
          coupleName1,
          coupleName2,
          date: `${eventTimeParts[0]} ${eventTimeParts[1]}`,
          venue,
          addressLine1,
          addressLine2,
          city,
          state,
          zip,
          rsvpDeadline,
          inviteMessage,
          bannerPhotoURL,
          galleryPhotos,
          colors,
        };
        success(transformedData);
      })
      .catch((err) => {
        error(err);
      });
  },
};

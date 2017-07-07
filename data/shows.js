/*
show object structure
  {
   slug,
   name,
   season,
   hostSlugs: [],
   cover,
   description,
   day,
   time,
   slots
  }
*/

module.exports = [
  {
    slug: 'damn-good-show',
    name: 'Damn Good Show',
    season: 'Summer 2017',
    hostSlugs: ['bitch-ass', 'kick-ass'],
    cover: 'http://thecopybot.com/wp-content/uploads/2015/03/RM-Podcast-Cover-12.png',
    description: `It is a long established fact that a reader will be 
      distracted by the readable content of a page when 
      looking at its layout. The point of using Lorem Ipsum is 
      that it has a more-or-less normal distribution of letters,
      as opposed to using 'Content here, content here', making it look 
      like readable English. Many desktop publishing packages and web 
      page editors now use Lorem Ipsum as their default model text
    `,
    day: 'Tuesday',
    time: '1900',
    slots: 1
  }
]

module.exports = {
    content: [
      "./src/**/*.{html,ts}",
    ],
    theme: {
      extend: {
        fontFamily: {
            'roboto': ['Roboto'],
            'karma': ['Karma'],
            'brushScript': ['"Brush Script MT"'],
            'oleoScript': ['"Oleo Script"'],
            'russoOne': ['"Russo One"']
          }, 
          gridTemplateColumns: {
            'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
            'auto-fill': 'repeat(auto-fit, minmax(0, 1fr))'
          },
          gridTemplateRows: {
            'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
            'auto-fill': 'repeat(auto-fit, minmax(0, 1fr))'
          }
      },
    },
    plugins: [],
  }
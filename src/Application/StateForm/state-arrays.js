const states = [
  'Alabama:AL',
  'Alaska:AK',
  'Arizona:AZ',
  'Arkansas:AR',
  'California:CA',
  'Colorado:CO',
  'Connecticut:CT',
  'Delaware:DE',
  'Florida:FL',
  'Georgia:GA',
  'Hawaii:HI',
  'Idaho:ID',
  'Illinois:IL',
  'Indiana:IN',
  'Iowa:IA',
  'Kansas:KS',
  'Kentucky:KY',
  'Louisiana:LA',
  'Maine:ME',
  'Maryland:MD',
  'Massachusetts:MA',
  'Michigan:MI',
  'Minnesota:MN',
  'Mississippi:MS',
  'Missouri:MO',
  'Montana:MT',
  'Nebraska:NE',
  'Nevada:NV',
  'New Hampshire:NH',
  'New Jersey:NJ',
  'New Mexico:NM',
  'New York:NY',
  'North Carolina:NC',
  'North Dakota:ND',
  'Ohio:OH',
  'Oklahoma:OK',
  'Oregon:OR',
  'Pennsylvania:PA',
  'Rhode Island:RI',
  'South Carolina:SC',
  'South Dakota:SD',
  'Tennessee:TN',
  'Texas:TX',
  'Utah:UT',
  'Vermont:VT',
  'Virginia:VA',
  'Washington:WA',
  'West Virginia:WV',
  'Wisconsin:WI',
  'Wyoming:WY'
];

const stateArrays = states.reduce((newStateArrs, state) => {
  const splitStates = state.split(':')
  newStateArrs[0].stateNames.push(splitStates[0])
  newStateArrs[1].stateAbbs.push(splitStates[1])
  return newStateArrs
}, [ 
  {stateNames: []}, 
  {stateAbbs: []}
  ]);

export { stateArrays }
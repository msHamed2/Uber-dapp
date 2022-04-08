export const tripSchema ={
    name:'trips',
    type:'document',
    title:'Trips',
    fields:[{
        name:'dropoff',
        type:'string',
        title:'Drop off',
    },
    {
        name:'pickup',
        type:'string',
        title:'Pick up',
    },
    {
        name:'rideCategory',
        type:'string',
        title:'Trip type',
    },
    {
        name:'price',
        type:'number',
        title:'Trip price',
    },
    {
        name:'rideTimestamp',
        type:'datetime',
        title:'Trip timestamp',
    },{
        name:'passenger',
        type:'reference',
        to: [ // The "to"-property must be set, and it must be an array of at least one type
    {
      type: 'users', // type is required
      title: 'users'
    },]
    }
]
}
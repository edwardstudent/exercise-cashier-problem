// const money1 = {
// 	notes: [100,50,20,10,5],
// 	coins: [2,1,.5,.2,.1]
// };

const money = {
	units: [
		{
			value: 100,
			kind: 'note'
		},
		{
			value: 50,
			kind: 'note'
		},
		{
			value: 20,
			kind: 'note'
		},
		{
			value: 10,
			kind: 'note'
		},
		{
			value: 5,
			kind: 'note'
		},
		{
			value: 2,
			kind: 'coin'
		},
		{
			value: 1,
			kind: 'coin'
		},
		{
			value: .5,
			kind: 'coin'
		},
		{
			value: .2,
			kind: 'coin'
		},
		{
			value: .1,
			kind: 'coin'
		},
		{
			value: .05,
			kind: 'coin'
		},
		{
			value: 02,
			kind: 'coin'
		},
		{
			value: .01,
			kind: 'coin'
		}
	]
}

console.log(money.notes);
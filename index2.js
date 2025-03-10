// cashier test
const moneyDollar = {
	units: [
		{
			value: 500,
			kind: 'note'
		},
		{
			value: 200,
			kind: 'note'
		},
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
			value: .25,
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
			value: .01,
			kind: 'coin'
		}
	]
}
const moneyEuro = {
	units: [
		{
			value: 500,
			kind: 'note'
		},
		{
			value: 200,
			kind: 'note'
		},
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
			value: .02,
			kind: 'coin'
		},
		{
			value: .01,
			kind: 'coin'
		}
	]
}

const getChange = (price, payAmount, money) => {
	const ret = {
		returnMoney: []
	};
	ret.payback = payAmount - price;
	let tempPayback = ret.payback;

	if (ret.payback < 0) {
		ret.error = true;
	} else {
		money.units.forEach(unit => {
			if (unit.value <= tempPayback) {
				while (unit.value <= tempPayback) {
					ret.returnMoney.push(unit);
					tempPayback -= unit.value;
				}
			}
		});
	}

	return ret;
};

const result = getChange(3.56, 1, moneyEuro);

console.log(result);

import React from 'react'
import {sortByDate, sortByItemCount, sortOrders} from './sortOrders';

describe('sortByItemCount function', () => {
	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});

	it('same items count', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('not an object', () => {
		const result = sortByItemCount(10, 20);

		expect(result).toBe(0);
	});

	it('without items propery', () => {
		const order1 = {
			not_items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it.each([
		[null, 	{date: 1544356800000}, 0],
		[{date: 1544356800000}, null, 0],
		[1544356800000, 1544356800000, 0],
		[{date1: 1544356800000}, {date: 1544356800000}, 0],
		[{date: 1544356800000}, {date: 1544356800000}, 0],
		[{date: 1544356800000}, {date: 1552481120000}, 1],
		[{date: 1552481120000}, {date: 1544356800000}, -1],
	])('sortByDate test: for fisrt = %o, second = %o expected %i)', (first, second, result) => {
		const test_result = sortByDate(first, second);
		expect(test_result).toEqual(result);
	})

	it('not array', () => {
		const result = sortOrders(10, 20);

		expect(result).toBe(undefined);
	});

	it('not function', () => {
		const result = sortOrders([10], 20);

		expect(result).toBe(undefined);
	});
});


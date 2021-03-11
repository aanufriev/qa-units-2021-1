jest.mock('../utils/getDate');

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react'
import Order from './Order';
import {fakeOrders} from '../data/fakeOrders';
import {getDate} from '../utils/getDate';

configure({adapter: new Adapter() });

describe('Order.js', () => {
  beforeEach(() => {
    getDate.mockReturnValue("1 января 2000");
  })

  afterEach(() => {
    jest.resetModules();
  })

  it('test ok', () => {
    const wrapper = shallow(<Order order={fakeOrders[0]}/>);

    expect(getDate).toHaveBeenCalledTimes(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('test null order', () => {
    const wrapper = shallow(<Order order={null}/>);

    expect(getDate).toHaveBeenCalledTimes(1);

    expect(wrapper.getElement()).toBeNull();
  });

  it('test empty items', () => {
    let order = Object.assign({}, fakeOrders[0]);
    delete order.items;  
    const wrapper = shallow(<Order order={order}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('test empty shop', () => {
    let order = Object.assign({}, fakeOrders[0]);
    delete order.shop;

    const wrapper = shallow(<Order order={order}/>);

    expect(wrapper.getElement()).toBeNull();
  });

  it('test empty date', () => {
    let order = Object.assign({}, fakeOrders[0]);
    delete order.date;
    const wrapper = shallow(<Order order={order}/>);

    expect(wrapper.getElement()).toBeNull();
  });
});


import React from 'react';
import App from './App';
import { UsersList } from './components/UsersList'
import { mount } from 'enzyme';

jest.mock('./components/users.json', () => [{
    "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
    }
}]);


describe('App', () => {
    test('render app', () => {
        const mockCallBack = jest.fn();

        const wrapper = mount((<UsersList onClick={mockCallBack} />));
        expect(wrapper.find('[data-id="Moriah.Stanton"]').find('span').text()).toMatch(/NAME: Clementina DuBuque/);
        wrapper.find(UsersList).find('ul').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});

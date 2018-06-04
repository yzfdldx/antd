import request from '../utils/request';

export function query() {
  return request('/api/users');
}

export function aaa(val) {
  return val * 2;
}

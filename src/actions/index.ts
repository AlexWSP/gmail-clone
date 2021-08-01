export const LOAD_EMAIL_LIST = 'LOAD_EMAIL_LIST';
export const RENDER_EMAIL_LIST = 'RENDER_EMAIL_LIST';

export function loadEmailList() {
  return {
    type: 'LOAD_EMAIL_LIST',
    emailList: []
  };
}
  
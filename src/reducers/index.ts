// interface Email {
//   __id: number;
//   starred: boolean;
//   from: String;
//   subject: String;
//   message: String;
//   received: String;
//   read: boolean;
// }

// type Action = {
//   type: 'RENDER_EMAIL_LIST',
//   emailList?: any;
// }

const initialState = {
    emailList: []
};
  
export default function emailApp(state = initialState, action: { type: any; emailList: any; }) {
    switch (action.type) {
      case 'RENDER_EMAIL_LIST':
        return {
          ...state,
          emailList: action.emailList,
        };

      default:
        return state;
    }
}
import { connect } from 'react-redux';
import EmailsView from '../Components/EmailsView';

interface Email {
  starred: boolean;
  from: String;
  subject: String;
  message: String;
  received: String;
  read: boolean;
}

const mapStateToProps = (state: { emailList: Email[]; }) => {
  return {
    emailList: state.emailList
  };
};

const EmailListContainer = connect(mapStateToProps)(EmailsView);

export default EmailListContainer;
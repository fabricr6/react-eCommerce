import SignupForm from '../../components/sign-up-form/sing-up-form.component';

import SignInForm from '../../components/sign-in-form/sing-in-form.component';

import './authentication.styles.scss'

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm></SignInForm>
      <SignupForm></SignupForm>
    </div>
  );
};

export default Authentication;
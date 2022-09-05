import { useForm, ValidationError } from '@formspree/react';
import Button from '../../../../components/Button';
import styles from '../../ContactMePage.module.css';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xjvzkjdb");
  console.log(state)
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div className={styles.profileBackground}>
      <div>Contact me</div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <Button type="submit" disabled={state.submitting}>Send</Button>
    </form>
    </div>
  );
};

export default ContactForm;

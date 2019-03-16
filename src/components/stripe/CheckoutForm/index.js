import React, { Component } from 'react';
import styled from 'styled-components';
import 'babel-polyfill';
import { CardElement, injectStripe } from 'react-stripe-elements';

const CardContainer = styled.div`
  padding: 5rem;
  background: lightgray;

  .StripeElement {
    box-sizing: border-box;

    height: 40px;

    padding: 10px 12px;

    border: 1px solid transparent;
    border-radius: 4px;
    background-color: white;

    box-shadow: 0 1px 3px 0 #e6ebf1;
    -webkit-transition: box-shadow 150ms ease;
    transition: box-shadow 150ms ease;
  }

  .StripeElement--focus {
    box-shadow: 0 1px 3px 0 #cfd7df;
  }

  .StripeElement--invalid {
    border-color: #fa755a;
  }

  .StripeElement--webkit-autofill {
    background-color: #fefde5 !important;
  }
`;
class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // User clicked submit
    console.log('Form Submitted');
  }

  render() {
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardContainer>
          <CardElement />
          <button className="btn btn-info mt-3 pl-5 pr-5" onClick={this.submit}>
            Send
          </button>
        </CardContainer>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);

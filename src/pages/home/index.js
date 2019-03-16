import React from 'react';
import { Layout } from 'components/layout';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from '../../components/stripe/CheckoutForm';
class Home extends React.Component {
  render() {
    return (
      <Layout
        title="Deep Cast - Home"
        description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
      >
        {/* TOP HERO SECTION */}

        <h1>Home Page</h1>
        <StripeProvider apiKey="pk_test_S2nDQsHcjVp8IGpKYGLsr61F">
          <div className="example">
            <h1>React Stripe Elements Example</h1>
            <Elements>
              <CheckoutForm />
            </Elements>
          </div>
        </StripeProvider>
      </Layout>
    );
  }
}

export default Home;

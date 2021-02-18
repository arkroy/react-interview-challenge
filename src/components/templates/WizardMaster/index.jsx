import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Layout from '../../organisms/Layout';
import AppRouter from '../../../shared/appRouter';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
import messages from '../../../shared/messages';
import GlobalStateProvider from './context/Provider';
import ShipperStateProvider from '../ShippersAddress/context/Provider';
import RecipientStateProvider from '../RecipientAddress/context/Provider';
import ShippingOptionsProvider from '../ShippingOptions/context/Provider';
import ShippingWeightProvider from '../ShippingWeight/context/Provider';
import ReviewProvider from '../Review/context/Provider';

const Wizard = () => {
  return (
    <GlobalStateProvider>
      <ShipperStateProvider>
        <RecipientStateProvider>
          <ShippingOptionsProvider>
            <ShippingWeightProvider>
              <ReviewProvider>
                <Layout>
                  <Router>
                    <Header heading={messages.appHeader} />
                    <Switch>
                      <AppRouter />
                    </Switch>
                    <Footer />
                  </Router>
                </Layout>
              </ReviewProvider>
            </ShippingWeightProvider>
          </ShippingOptionsProvider>
        </RecipientStateProvider>
      </ShipperStateProvider>
    </GlobalStateProvider>
  );
};

export default Wizard;

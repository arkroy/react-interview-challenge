import ShippersAddress from '../../../components/templates/ShippersAddress';
import RecipientAddress from '../../../components/templates/RecipientAddress';
import ShippingOptions from '../../../components/templates/ShippingOptions';
import ShippingWeight from '../../../components/templates/ShippingWeight';
import Review from '../../../components/templates/Review';
import Confirmation from '../../../components/templates/Confirmation';

export const ROUTES_CONFIG = [
  { exact: true, path: '/', component: ShippersAddress },
  { exact: false, path: '/recipientAddress', component: RecipientAddress },
  { exact: false, path: '/shippingOptions', component: ShippingOptions },
  { exact: false, path: '/shippingWeight', component: ShippingWeight },
  { exact: false, path: '/review', component: Review },
  { exact: false, path: '/confirmation', component: Confirmation },
];

export default ROUTES_CONFIG;

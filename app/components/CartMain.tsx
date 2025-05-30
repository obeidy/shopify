import {useOptimisticCart} from '@shopify/hydrogen';
import {Link} from '@remix-run/react';
import type {CartApiQueryFragment} from 'storefrontapi.generated';
import {CartLineItem} from '~/components/CartLineItem';
import {CartSummary} from './CartSummary';
import { useCartHeader } from './custom-components/CartHeaderExpand';
import emptycart from '~/assets/images/empty-cart.svg';


export type CartLayout = 'page' | 'aside';

export type CartMainProps = {
  cart: CartApiQueryFragment | null;
  layout: CartLayout;
};

/**
 * The main cart component that displays the cart items and summary.
 * It is used by both the /cart route and the cart aside dialog.
 */
export function CartMain({layout, cart: originalCart}: CartMainProps) {
  // The useOptimisticCart hook applies pending actions to the cart
  // so the user immediately sees feedback when they modify the cart.
  const cart = useOptimisticCart(originalCart);

  const linesCount = Boolean(cart?.lines?.nodes?.length || 0);
  const withDiscount =
    cart &&
    Boolean(cart?.discountCodes?.filter((code) => code.applicable)?.length);
  const className = `cart-main ${withDiscount ? 'with-discount' : ''}`;
  const cartHasItems = cart?.totalQuantity! > 0;

  return (
    <div className={className}>
      <CartEmpty hidden={linesCount} layout={layout} />

      <div className="cart-details" hidden={!linesCount}>
        <div aria-labelledby="cart-lines" className='cart-lines'>
          <ul>
            {(cart?.lines?.nodes ?? []).map((line) => (
              <CartLineItem key={line.id} line={line} layout={layout} />
            ))}
          </ul>
        </div>
        {cartHasItems && <CartSummary cart={cart} layout={layout} />}
      </div>
    </div>
  );
}

function CartEmpty({
  hidden = false,
}: {
  hidden: boolean;
  layout?: CartMainProps['layout'];
}) {
  const {close} = useCartHeader();
  return (
    <div className='cart-empty' hidden={hidden}>
      <img src={emptycart} alt="Looks like you haven't added anything yet, let's get you 
        started!" />
      <p className='text-center description'>
        Looks like you haven't added anything yet <br/>let's get you 
        started!
      </p>
      <Link 
        to="/c/all" 
        onClick={close} prefetch="viewport"
        className="btn btn-primary link-primary text-center"
      >
        <span className='link-hover'>Continue shopping</span>
        
      </Link>
    </div>
  );
}

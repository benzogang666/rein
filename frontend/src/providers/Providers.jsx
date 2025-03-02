import { CartProvider } from "../contexts/cartContext/CartContext";
import { ProductsProvider } from "../contexts/productsContext/productsContext";

const BuildProviderTree = (providers) =>
  providers.reduceRight(
    (AccProvider, CurrentProvider) =>
      ({ children }) =>
        (
          <CurrentProvider>
            <AccProvider>{children}</AccProvider>
          </CurrentProvider>
        ),
    ({ children }) => <>{children}</>
  );

const Providers = BuildProviderTree([CartProvider, ProductsProvider]);

export default Providers;
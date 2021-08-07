import React from 'react';
import PropTypes from 'prop-types';

import { Platform } from '~/layouts';
import { CheckoutModal } from '~/components';

import { SelectedPlatformProvider } from '~/hooks/useSelectedPlatform';
import { CheckoutProvider } from '~/hooks/useCheckout';

import api from '~/services/api';

const getStaticProps = async ({ params }) => {
  const { platform: sku } = params;

  try {
    const [platformsResponse, plansResponse] = await Promise.all([
      api.get(`/plataformas`),
      api.get(`/planos/${sku}`),
    ]);

    const platform = platformsResponse.data.plataformas.find(
      (item) => item.sku === sku,
    );

    if (!platform) {
      throw new Error('Platform not found');
    }

    const plans = plansResponse.data.planos.filter(({ active }) => !active);

    return {
      props: {
        platform: {
          ...platform,
          plans,
        },
      },
      revalidate: 60,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }
};

const getStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
});

function Page({ platform }) {
  const [firstPlan] = platform?.plans || [];
  return (
    <SelectedPlatformProvider initialData={platform}>
      <CheckoutProvider>
        <Platform initialSelectedItem={firstPlan || null} />
        <CheckoutModal />
      </CheckoutProvider>
    </SelectedPlatformProvider>
  );
}

const planObject = PropTypes.shape({
  sku: PropTypes.string,
  franquia: PropTypes.string,
  valor: PropTypes.string,
  ativo: PropTypes.bool,
});

Page.propTypes = {
  platform: PropTypes.shape({
    sku: PropTypes.string,
    nome: PropTypes.string,
    descricao: PropTypes.string,
    plans: PropTypes.arrayOf(planObject).isRequired,
  }).isRequired,
};

export default Page;
export { getStaticProps, getStaticPaths };

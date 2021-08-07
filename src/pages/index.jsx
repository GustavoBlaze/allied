import React from 'react';
import PropTypes from 'prop-types';

import api from '~/services/api';
import { PlatformsProvider } from '~/hooks/usePlatforms';
import { Home } from '~/layouts';

const getStaticProps = async () => {
  const { data } = await api.get('/plataformas');

  const platforms = data.plataformas;

  return {
    props: {
      platforms,
    },
  };
};

function Page({ platforms }) {
  return (
    <PlatformsProvider initialData={platforms}>
      <Home />
    </PlatformsProvider>
  );
}

const platform = PropTypes.shape({
  sku: PropTypes.string,
  nome: PropTypes.string,
  descricao: PropTypes.string,
});

Page.propTypes = {
  platforms: PropTypes.arrayOf(platform).isRequired,
};

export default Page;
export { getStaticProps };

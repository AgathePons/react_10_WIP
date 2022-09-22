import PropTypes from 'prop-types';
import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';

function Home({
  recipes,
  text,
  title,
}) {
  return (
    <Page>
      <AppHeader />
      <Content
        title={title}
        text={text}
        recipes={recipes}
      />
    </Page>
  );
}

Home.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  recipes: PropTypes.array.isRequired,
};

export default Home;

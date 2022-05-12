import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function BackToTop(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div">
            Scroll to see button
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box sx={{ my: 2 }}>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ex totam cum placeat eveniet, laborum, fugit molestias iure, incidunt quibusdam praesentium odio repudiandae aspernatur accusamus omnis nulla maxime corporis! Animi fugit et iste sunt doloribus quod perferendis quibusdam cum inventore in reiciendis dignissimos quos asperiores, aspernatur fuga eos accusamus dolorum ullam rem quas totam. Earum dignissimos ad doloremque aperiam ratione minima fuga nihil voluptates ab, laborum, maiores illo aliquam cum enim necessitatibus nam. Recusandae, illum quos eum sequi iure quas quaerat dolores minus neque ad libero, voluptates ipsa doloremque necessitatibus incidunt perspiciatis odit accusantium! Ullam totam molestiae perspiciatis laudantium? Perspiciatis laborum esse, sapiente aut harum praesentium recusandae dolores ea vel nihil maiores accusamus unde temporibus, consequatur dignissimos, natus dolorem quaerat magni. Labore corporis eius ab inventore porro nobis aspernatur eaque iusto neque voluptatibus, amet, sint totam nesciunt optio quisquam voluptate quos ad aperiam earum deserunt. Sapiente reprehenderit et eaque, tempora quisquam nisi aliquam sint natus doloremque facilis vero sed odio eligendi tempore aut beatae perspiciatis voluptatibus iure! Quos, neque tenetur earum asperiores eum dolores corrupti molestiae veritatis. Veniam pariatur commodi numquam dolore voluptatum officia sequi distinctio! Quia eius distinctio iste iure, asperiores minima qui nam repellendus deserunt magnam voluptatem placeat ipsam, aperiam numquam quae corporis sit delectus? Sed quos doloremque illo quis praesentium reiciendis, excepturi totam in necessitatibus earum eaque doloribus? Adipisci officia maiores incidunt magni nisi, minus quasi a architecto maxime porro iure nostrum rerum voluptas quos modi reiciendis voluptatibus blanditiis ratione eligendi nulla amet iste esse mollitia. Doloremque neque soluta atque voluptatibus commodi asperiores inventore eveniet a est placeat, minima rerum culpa autem ut porro consequuntur architecto? Aspernatur fugiat laboriosam illo, sequi nobis totam, alias ex a sint laborum perferendis nesciunt enim porro incidunt nemo ad voluptatibus excepturi? Nostrum voluptates temporibus tempora recusandae vero modi magni, esse cupiditate quis eius fugit ullam architecto tenetur harum earum fuga vitae autem quisquam consequatur. Nostrum iste dolore commodi. Praesentium consequuntur veritatis optio. Cum, odio quaerat temporibus facilis non quos ad eum ratione commodi et veritatis eius deserunt maiores eligendi nisi. Consequuntur blanditiis quae animi accusamus officia eveniet veniam laboriosam excepturi et. Esse culpa aliquam voluptas hic nesciunt dolorum neque ipsam fugiat nobis, ea dicta natus adipisci est atque corporis, cupiditate excepturi similique! Modi dolor tenetur nostrum iure explicabo omnis nemo et accusantium illo numquam reprehenderit expedita ab atque ducimus voluptatum ipsa autem alias, sequi libero hic ullam vero asperiores. Pariatur aperiam consequuntur nostrum! Ad optio expedita, repellat fugit provident excepturi recusandae corporis eaque sunt consequatur nihil atque eos explicabo eveniet, totam dolore voluptatem at architecto omnis veniam nostrum libero ullam molestias nisi. Sed velit alias at tenetur, obcaecati, laborum, voluptatibus voluptatum distinctio consectetur neque modi fugit harum earum. Quisquam ullam facere temporibus libero ab, iusto sequi quam voluptas neque vero illo illum ea laudantium voluptates rerum ipsam! Temporibus unde, eaque necessitatibus dolores, in saepe consectetur provident natus asperiores inventore illo dolorum sed quisquam nesciunt hic libero labore ad iure voluptatum excepturi nulla reiciendis id! Quos autem ipsa facere eius ad officia!</p>
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

import React from 'react';
import { Image, Divider, Responsive } from 'semantic-ui-react';

import useStyles from './style';

const src =
  'https://cdn.pixabay.com/photo/2020/05/01/19/07/tulips-5118757_960_720.jpg';

const PictureGallery = () => {
  const classes = useStyles();
  const listPicture = [];
  for (let i = 0; i < 20; i++) {
    listPicture.push(<Image key={i} className={classes.picture} src={src} />);
  }

  return (
    <div>
      <Divider hidden />
      <Responsive
        as={Image.Group}
        size="small"
        className={classes.group}
        maxWidth={599}
      >
        {listPicture}
      </Responsive>
      <Responsive
        as={Image.Group}
        size="medium"
        className={classes.group}
        minWidth={600}
        maxWidth={1249}
      >
        {listPicture}
      </Responsive>
      <Responsive
        as={Image.Group}
        size="big"
        className={classes.group}
        minWidth={1250}
      >
        {listPicture}
      </Responsive>
    </div>
  );
};

export default PictureGallery;

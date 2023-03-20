import PropTypes from 'prop-types';
import { Box, Stack, Link, Card, Typography, CardHeader } from '@mui/material';
import Scrollbar from '../../../components/scrollbar';

AppNewsUpdate.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function AppNewsUpdate({ title, subheader, list, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {list.map((news) => (
            <NewsItem key={news.id} news={news} />
          ))}
        </Stack>
      </Scrollbar>
    </Card>
  );
}

NewsItem.propTypes = {
  news: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    postedAt: PropTypes.instanceOf(Date),
    title: PropTypes.string,
  }),
};

function NewsItem({ news }) {
  const { image, title, description } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box component="img" alt={title} src={image} sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }} />

      <Box sx={{ minWidth: 240, flexGrow: 1 }}>
        <Link color="inherit" variant="subtitle2" underline="hover" noWrap>
          {title}
        </Link>

        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {description}
        </Typography>
      </Box>

      <Typography variant="body1" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary', fontSize: 14 }}>
        Quantidade: 10
      </Typography>
      <Typography
        variant="body1"
        sx={{ pr: 3, flexShrink: 0, color: 'text.secondary', fontSize: 16, textDecorationLine: 'underline' }}
      >
        Preço: R$ 239,99
      </Typography>
    </Stack>
  );
}

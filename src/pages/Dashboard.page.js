import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import { ReactNotifications, Store } from 'react-notifications-component';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import axios from 'axios';
import VoiceMl from '../voice/shopee-voice.mpeg';
import { AppNewsUpdate, AppCurrentVisits, AppWidgetSummary, AppConversionRates } from '../sections/dashboard/app';
import { SocketClient } from '../services/io';

const DashboardPage = () => {
  const theme = useTheme();

  const [results, setResults] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        SocketClient.on('connection', (socket) => console.log(socket));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const msg = '(2) Você vendeu no Shopee!';

  const PlaySound = () => {
    const audio = new Audio(VoiceMl);
    audio.play();
  };

  useEffect(() => {
    SocketClient.on('connect', () => alert('Tá rodando!'));
  }, []);

  useEffect(() => {
    PlaySound();
    Store.addNotification({
      title: 'Nova venda!',
      message: 'Shopee',
      type: 'success',
      insert: 'top',
      container: 'top-left',
      dismiss: {
        duration: 15000,
        onScreen: false,
      },
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>{msg}</title>
      </Helmet>

      <Container maxWidth="xl">
        <ReactNotifications />

        <Typography variant="h4" sx={{ mb: 5 }}>
          Olá, Seja bem-vindo!
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={12}>
            <AppWidgetSummary title="Vendas hoje" total={'0'} icon={'ant-design:line-chart'} />
          </Grid>

          <Grid item xs={12} md={6} lg={12}>
            <AppNewsUpdate
              title="Últimas vendas"
              list={results?.map((item) => ({
                id: faker.datatype.uuid(),
                title: item.title,
                description: item.id,
                image: `/assets/images/covers/ml.png`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Desempenho de cada plataforma"
              chartData={[
                { label: 'Submarino', value: 1 },
                { label: 'Magazine Luiza', value: 5 },
                { label: 'Mercado Livre', value: 4 },
                { label: 'Shopee', value: 2 },
                { label: 'Amazon', value: 1 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Total de vendas em cada mês do ano."
              subheader="Confira abaixo o total de vendas em cada mês do ano."
              chartData={[
                { label: 'JAN', value: 0 },
                { label: 'FEV', value: 0 },
                { label: 'MAR', value: 0 },
                { label: 'ABR', value: 0 },
                { label: 'MAI', value: 0 },
                { label: 'JUN', value: 0 },
                { label: 'JUL', value: 0 },
                { label: 'AGO', value: 0 },
                { label: 'SET', value: 0 },
                { label: 'OUT', value: 0 },
                { label: 'NOV', value: 0 },
                { label: 'DEZ', value: 0 },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <AppConversionRates
              title="Total de vendas de cada plataforma"
              subheader="Confira abaixo o total de vendas em cada plataforma."
              chartData={[
                { label: 'Mercado Livre', value: 0 },
                { label: 'Shopee', value: 0 },
                { label: 'Amazon', value: 0 },
                { label: 'Submarino', value: 0 },
                { label: 'Magazine Luiza', value: 0 },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <AppConversionRates
              title="Total de vendas no Mercado Livre em cada mês do ano."
              subheader="Confira abaixo o total de vendas no Mercado Livre em cada mês do ano."
              chartData={[
                { label: 'JAN', value: 0 },
                { label: 'FEV', value: 0 },
                { label: 'MAR', value: 0 },
                { label: 'ABR', value: 0 },
                { label: 'MAI', value: 0 },
                { label: 'JUN', value: 0 },
                { label: 'JUL', value: 0 },
                { label: 'AGO', value: 0 },
                { label: 'SET', value: 0 },
                { label: 'OUT', value: 0 },
                { label: 'NOV', value: 0 },
                { label: 'DEZ', value: 0 },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <AppConversionRates
              title="Total de vendas na Shopee em cada mês do ano."
              subheader="Confira abaixo o total de vendas na Shopee em cada mês do ano."
              chartData={[
                { label: 'JAN', value: 0 },
                { label: 'FEV', value: 0 },
                { label: 'MAR', value: 0 },
                { label: 'ABR', value: 0 },
                { label: 'MAI', value: 0 },
                { label: 'JUN', value: 0 },
                { label: 'JUL', value: 0 },
                { label: 'AGO', value: 0 },
                { label: 'SET', value: 0 },
                { label: 'OUT', value: 0 },
                { label: 'NOV', value: 0 },
                { label: 'DEZ', value: 0 },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <AppConversionRates
              title="Total de vendas na Magazine Luiza em cada mês do ano."
              subheader="Confira abaixo o total de vendas na Magazine Luiza em cada mês do ano."
              chartData={[
                { label: 'JAN', value: 0 },
                { label: 'FEV', value: 0 },
                { label: 'MAR', value: 0 },
                { label: 'ABR', value: 0 },
                { label: 'MAI', value: 0 },
                { label: 'JUN', value: 0 },
                { label: 'JUL', value: 0 },
                { label: 'AGO', value: 0 },
                { label: 'SET', value: 0 },
                { label: 'OUT', value: 0 },
                { label: 'NOV', value: 0 },
                { label: 'DEZ', value: 0 },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <AppConversionRates
              title="Total de vendas na Amazon em cada mês do ano."
              subheader="Confira abaixo o total de vendas na Amazon em cada mês do ano."
              chartData={[
                { label: 'JAN', value: 0 },
                { label: 'FEV', value: 0 },
                { label: 'MAR', value: 0 },
                { label: 'ABR', value: 0 },
                { label: 'MAI', value: 0 },
                { label: 'JUN', value: 0 },
                { label: 'JUL', value: 0 },
                { label: 'AGO', value: 0 },
                { label: 'SET', value: 0 },
                { label: 'OUT', value: 0 },
                { label: 'NOV', value: 0 },
                { label: 'DEZ', value: 0 },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <AppConversionRates
              title="Total de vendas no Submarino em cada mês do ano."
              subheader="Confira abaixo o total de vendas no Submarino em cada mês do ano."
              chartData={[
                { label: 'JAN', value: 0 },
                { label: 'FEV', value: 0 },
                { label: 'MAR', value: 0 },
                { label: 'ABR', value: 0 },
                { label: 'MAI', value: 0 },
                { label: 'JUN', value: 0 },
                { label: 'JUL', value: 0 },
                { label: 'AGO', value: 0 },
                { label: 'SET', value: 0 },
                { label: 'OUT', value: 0 },
                { label: 'NOV', value: 0 },
                { label: 'DEZ', value: 0 },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default DashboardPage;

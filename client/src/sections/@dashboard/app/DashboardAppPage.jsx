import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import { useTheme } from "@mui/material/styles";
import { Container, Grid, Typography, CircularProgress } from "@mui/material";
import { AppCurrentVisits, AppWebsiteVisits, AppWidgetSummary } from "./index";
import { useAuth } from "../../../hooks/useAuth";
import { fetchDashboardData } from './dashboardApi';

export default function DashboardAppPage() {
  const { user } = useAuth();
  const theme = useTheme();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const data = await fetchDashboardData();
        setDashboardData(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load dashboard data');
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  // Generate chart colors based on the number of genres
  const chartColors = dashboardData.genreDistribution.map((_, index) => {
    const hue = (index * 137.508) % 360; // Use golden angle approximation for color distribution
    return `hsl(${hue}, 70%, 50%)`;
  });

  return (
    <>
      <Helmet>
        <title> Library | Dashboard </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{mb: 5}}>
          Hi {user.name.split(' ')[0]}, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Books" total={dashboardData.booksCount} icon={'ant-design:book-filled'}/>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Authors" total={dashboardData.authorsCount} color="info" icon={'ant-design:edit-filled'}/>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Genres" total={dashboardData.genresCount} color="warning" icon={'ant-design:tags-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Users" total={dashboardData.usersCount} color="error" icon={'ant-design:smile-filled'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Book Circulation"
              // subheader="(+43%) than last year"
              chartLabels={[
                '09/02/2024',
                '09/03/2024',
                '09/04/2024',
                '09/05/2024',
                '09/06/2024',
                '09/07/2024',
                '09/08/2024',
                '09/09/2024',
                '09/10/2024',
                '09/11/2024',
                '09/12/2024',
              ]}
              chartData={[
                {
                  name: 'Returned',
                  type: 'column',
                  fill: 'solid',
                  data: [33, 41, 32, 47, 17, 22, 21, 21, 44, 22, 30],
                },
                {
                  name: 'Borrowed',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                // {
                //   name: 'Returned',
                //   type: 'line',
                //   fill: 'solid',
                //   data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                // },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Genre Distribution"
              chartData={dashboardData.genreDistribution}
              chartColors={chartColors}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
import React from 'react';
import { Card, CardContent, Button, Typography, Stack, Chip } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { likeChallenge } from '../../../redux/actions/challenges';

export default function ChallengeCard({ challenge }) {
  const tagsArray = challenge.tags[0].split(',');
  const dispatch = useDispatch();
  
  return (
    <Card sx={{ boxShadow: '1px 2px 6px 0 rgb(0 0 0 / 10%), inset 1px 1px 0 0 rgb(255 255 255 / 70%)', borderRadius: '4px' }}>
      <CardContent>
        <Typography variant="h6" sx={{ pb: 1,   textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>{challenge.title}</Typography>
        <Typography variant="caption">{moment(challenge.createdAt).fromNow()}</Typography>
        <Stack direction="row" spacing={1} sx={{ py: 1.75 }}>
          {tagsArray.map((tag, index) => (
            <Chip key={index} label={tag} size="small" variant="outlined" sx={{ fontSize: '0.75rem', textTransform: 'capitalize' }} />
          ))}
        </Stack>
        <Typography variant="body2" color="text.secondary" sx={{
          display: '-webkit-box',
          WebkitLineClamp: '3',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          height: '60px',
          mb: 2
        }}>{challenge.description}</Typography>
        <Button variant="text" startIcon={<ThumbUpIcon />} size="small" onClick={() => dispatch(likeChallenge(challenge._id))} sx={{textTransform: 'capitalize', color: '#007aff'}}>Upvote {challenge.likeCount}</Button>
      </CardContent>
    </Card>
  );
}
import { Box,Rating } from "@mui/material"

const RatingReview = ({rating}) => {
    return (
        <>
         <Box sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Rating name="read-only" value={rating.rate} precision={0.5} readOnly />
                <Box sx={{ ml: 2 ,fontSize:20}}>{`${rating.count} reviews`}</Box>
         </Box>
        </>
    )
}

export default RatingReview
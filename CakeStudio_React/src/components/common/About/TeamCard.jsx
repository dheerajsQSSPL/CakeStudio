import {
    Avatar,
    Box,
    IconButton,
    Typography
} from "@mui/material";

import "./TeamCard.css";

const TeamCard = ({ member }) => {

    return (

        <Box className="team-card">

            <Avatar

                src={member.image}

                alt={member.name}

                className="team-avatar"

            />

            <Typography className="team-name">

                {member.name}

            </Typography>

            <Typography className="team-role">

                {member.role}

            </Typography>

            <Typography className="team-description">

                {member.description}

            </Typography>

            <Box className="team-socials">

                {member.socials.map((Icon, index) => (

                    <IconButton
                        key={index}
                        size="small"
                    >

                        <Icon className="team-social-icon" />

                    </IconButton>

                ))}

            </Box>

        </Box>

    );

};

export default TeamCard;
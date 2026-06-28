import { Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link as RouterLink } from "react-router-dom";

import "./Breadcrumb.css";

const Breadcrumb = ({ items }) => {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      className="breadcrumb"
      sx={{
        marginBottom: "10px",
        marginTop:"5px"
      }}
    >
      {items.map((item, index) =>
        index === items.length - 1 ? (
          <Typography key={item.label} className="breadcrumb-current">
            {item.label}
          </Typography>
        ) : (
          <Link
            key={item.label}
            component={RouterLink}
            to={item.path}
            underline="hover"
            className="breadcrumb-link"
          >
            {item.label}
          </Link>
        )
      )}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
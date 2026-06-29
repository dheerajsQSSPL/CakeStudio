import { Box, Typography } from "@mui/material";

import BakeryDiningOutlinedIcon from "@mui/icons-material/BakeryDiningOutlined";
import ScaleOutlinedIcon from "@mui/icons-material/ScaleOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

import "./ProductSpecifications.css";

const ProductSpecifications = ({ product }) => {

    const specifications = [

        {
            icon: BakeryDiningOutlinedIcon,
            label: "Flavour",
            value: product.flavour
        },

        {
            icon: ScaleOutlinedIcon,
            label: "Available Sizes",
            value: product.weight
        },

        {
            icon: LocalShippingOutlinedIcon,
            label: "Delivery",
            value: product.delivery
        }

    ];

    return (

        <Box className="product-specifications">

            {specifications.map((item, index) => {

                const Icon = item.icon;

                return (

                    <Box
                        key={index}
                        className="product-specification"
                    >

                        <Icon className="specification-icon" />

                        <Typography className="specification-text">

                            <span className="specification-label">

                                {item.label}:

                            </span>

                            {" "}

                            {item.value}

                        </Typography>

                    </Box>

                );

            })}

        </Box>

    );

};

export default ProductSpecifications;
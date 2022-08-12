import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import defaultTheme from "../../Theme/theme";
import { useTheme } from "../../PierUIProvider";

const propsMediaQueries = {
  columns: PropTypes.string,
  autoColumns: PropTypes.string,
  rows: PropTypes.string,
  rowGap: PropTypes.string,
  autoRows: PropTypes.string,
  areas: PropTypes.string,
  autoFlow: PropTypes.string,
  height: PropTypes.string,
};

const propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  as: PropTypes.string,
  children: PropTypes.any,
  columns: PropTypes.string,
  columnGap: PropTypes.string,
  autoColumns: PropTypes.string,
  rows: PropTypes.string,
  rowGap: PropTypes.string,
  autoRows: PropTypes.string,
  areas: PropTypes.string,
  autoFlow: PropTypes.string,
  height: PropTypes.string,
  xs: PropTypes.shape(propsMediaQueries),
  sm: PropTypes.shape(propsMediaQueries),
  md: PropTypes.shape(propsMediaQueries),
  lg: PropTypes.shape(propsMediaQueries),
  xl: PropTypes.shape(propsMediaQueries),
};

const defaultProps = {
  as: "div",
  bgColor: "transparent",
  columnGap: "20px",
  columns: "none",
  autoColumns: "auto",
  rows: "auto auto",
  autoRows: "auto",
  rowGap: "20px",
  areas: "none",
  autoFlow: "row",
  height: "auto",
  xs: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

const Grid = (props) => {
  const {
    as,
    className,
    bgColor,
    rows,
    rowGap,
    autoRows,
    columns,
    columnGap,
    autoColumns,
    autoFlow,
    areas,
    height,
    xs,
    sm,
    md,
    lg,
    xl,
    children,
    ...restProps
  } = props;

  const Component = as;

  const customTheme = useTheme();
  const theme = customTheme ? customTheme : defaultTheme;

  const isEmptyObject = (o) => Object.keys(o).length === 0;

  return (
    <>
      <Component
        className={classNames(
          "grid",
          className,
          xs && !isEmptyObject(xs) && `grid-xs`,
          sm && !isEmptyObject(sm) && `grid-sm`,
          md && !isEmptyObject(md) && `grid-md`,
          lg && !isEmptyObject(lg) && `grid-lg`,
          md && !isEmptyObject(xl) && `grid-xl`,
          bgColor && `bg-color`
        )}
        {...restProps}
      >
        {children}
      </Component>

      <style jsx>{`
        .grid {
          display: grid;
          grid-template-rows: ${rows};
          grid-auto-rows: ${autoRows};
          grid-template-columns: ${columns};
          grid-auto-columns: ${autoColumns};
          grid-column-gap: ${columnGap};
          grid-row-gap: ${rowGap};
          grid-auto-flow: ${autoFlow};
          grid-template-areas: ${areas};
          height: ${height};
        }
        .bg-color {
          background-color: ${bgColor};
        }

        @media (min-width: ${theme.breakpoints.xs}) {
          .grid.grid-xs {
            ${xs.rows
              ? "grid-template-rows:" + xs.rows
              : "grid-template-rows: none"};
            ${xs.autoRows
              ? "grid-auto-rows:" + xs.autoRows
              : "grid-auto-rows: auto"};
            ${xs.rowGap ? "grid-row-gap:" + xs.rowGap : "grid-row-gap: normal"};
            ${xs.columns
              ? "grid-template-columns:" + xs.columns
              : "grid-template-columns: none"};
            ${xs.autoColumns
              ? "grid-auto-columns:" + xs.autoColumns
              : "grid-auto-columns: auto"};
            ${xs.columnGap
              ? "grid-column-gap:" + xs.columnGap
              : "grid-column-gap: normal"};
            ${xs.autoFlow
              ? "grid-auto-flow:" + xs.autoFlow
              : "grid-auto-flow: row"};
            ${xs.areas
              ? "grid-template-areas:" + xs.areas
              : "grid-template-areas: none"};
            ${xs.height ? "height:" + xs.height : "height: auto"};
          }
        }
        @media (min-width: ${theme.breakpoints.sm}) {
          .grid.grid-sm {
            ${sm.rows
              ? "grid-template-rows:" + sm.rows
              : "grid-template-rows: none"};
            ${sm.autoRows
              ? "grid-auto-rows:" + sm.autoRows
              : "grid-auto-rows: auto"};
            ${sm.rowGap ? "grid-row-gap:" + sm.rowGap : "grid-row-gap: normal"};
            ${sm.columns
              ? "grid-template-columns:" + sm.columns
              : "grid-template-columns: none"};
            ${sm.autoColumns
              ? "grid-auto-columns:" + sm.autoColumns
              : "grid-auto-columns: auto"};
            ${sm.columnGap
              ? "grid-column-gap:" + sm.columnGap
              : "grid-column-gap: normal"};
            ${sm.autoFlow
              ? "grid-auto-flow:" + sm.autoFlow
              : "grid-auto-flow: row"};
            ${sm.areas
              ? "grid-template-areas:" + sm.areas
              : "grid-template-areas: none"};
            ${sm.height ? "height:" + sm.height : "height: auto"};
          }
        }

        @media (min-width: ${theme.breakpoints.md}) {
          .grid.grid-md {
            ${md.rows
              ? "grid-template-rows:" + md.rows
              : "grid-template-rows: none"};
            ${md.autoRows
              ? "grid-auto-rows:" + md.autoRows
              : "grid-auto-rows: auto"};
            ${md.rowGap ? "grid-row-gap:" + md.rowGap : "grid-row-gap: normal"};
            ${md.columns
              ? "grid-template-columns:" + md.columns
              : "grid-template-columns: none"};
            ${md.autoColumns
              ? "grid-auto-columns:" + md.autoColumns
              : "grid-auto-columns: auto"};
            ${md.columnGap
              ? "grid-column-gap:" + md.columnGap
              : "grid-column-gap: normal"};
            ${md.autoFlow
              ? "grid-auto-flow:" + md.autoFlow
              : "grid-auto-flow: row"};
            ${md.areas
              ? "grid-template-areas:" + md.areas
              : "grid-template-areas: none"};
            ${md.height ? "height:" + md.height : "height: auto"};
          }
        }
        @media (min-width: ${theme.breakpoints.lg}) {
          .grid.grid-lg {
            ${lg.rows
              ? "grid-template-rows:" + lg.rows
              : "grid-template-rows: none"};
            ${lg.autoRows
              ? "grid-auto-rows:" + lg.autoRows
              : "grid-auto-rows: auto"};
            ${lg.rowGap ? "grid-row-gap:" + lg.rowGap : "grid-row-gap: normal"};
            ${lg.columns
              ? "grid-template-columns:" + lg.columns
              : "grid-template-columns: none"};
            ${lg.autoColumns
              ? "grid-auto-columns:" + lg.autoColumns
              : "grid-auto-columns: auto"};
            ${lg.columnGap
              ? "grid-column-gap:" + lg.columnGap
              : "grid-column-gap: normal"};
            ${lg.autoFlow
              ? "grid-auto-flow:" + lg.autoFlow
              : "grid-auto-flow: row"};
            ${lg.areas
              ? "grid-template-areas:" + lg.areas
              : "grid-template-areas: none"};
            ${lg.height ? "height:" + lg.height : "height: auto"};
          }
        }
        @media (min-width: ${theme.breakpoints.xl}) {
          .grid.grid-xl {
            ${xl.rows
              ? "grid-template-rows:" + xl.rows
              : "grid-template-rows: none"};
            ${xl.autoRows
              ? "grid-auto-rows:" + xl.autoRows
              : "grid-auto-rows: auto"};
            ${xl.rowGap ? "grid-row-gap:" + xl.rowGap : "grid-row-gap: normal"};
            ${xl.columns
              ? "grid-template-columns:" + xl.columns
              : "grid-template-columns: none"};
            ${xl.autoColumns
              ? "grid-auto-columns:" + xl.autoColumns
              : "grid-auto-columns: auto"};
            ${xl.columnGap
              ? "grid-column-gap:" + xl.columnGap
              : "grid-column-gap: normal"};
            ${xl.autoFlow
              ? "grid-auto-flow:" + xl.autoFlow
              : "grid-auto-flow: row"};
            ${xl.areas
              ? "grid-template-areas:" + xl.areas
              : "grid-template-areas: none"};
            ${xl.height ? "height:" + xl.height : "height: auto"};
          }
        }
      `}</style>
    </>
  );
};

export default Grid;

Grid.propTypes = propTypes;

Grid.defaultProps = defaultProps;

import classNames from "classnames";
import PropTypes from "prop-types";

import defaultTheme from "../../Theme/theme";
import { useTheme } from "../../UiProvider";

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
            ${xs.rows ? "grid-template-rows:" + xs.rows : ""};
            ${xs.autoRows ? "grid-auto-rows:" + xs.autoRows : ""};
            ${xs.rowGap ? " grid-row-gap:" + xs.rowGap : ""};
            ${xs.columns ? "grid-template-columns:" + xs.columns : ""};
            ${xs.autoColumns ? "grid-auto-columns:" + xs.autoColumns : ""};
            ${xs.columnGap ? "grid-column-gap:" + xs.columnGap : ""};
            ${xs.autoFlow ? "grid-auto-flow:" + xs.autoFlow : ""};
            ${xs.areas ? "grid-template-areas:" + xs.areas : ""};
            ${xs.height ? "height:" + xs.height : ""};
          }
        }
        @media (min-width: ${theme.breakpoints.sm}) {
          .grid.grid-sm {
            ${sm.rows ? "grid-template-rows:" + sm.rows : ""};
            ${sm.autoRows ? "grid-auto-rows:" + sm.autoRows : ""};
            ${sm.rowGap ? " grid-row-gap:" + sm.rowGap : ""};
            ${sm.columns ? "grid-template-columns:" + sm.columns : ""};
            ${sm.autoColumns ? "grid-auto-columns:" + sm.autoColumns : ""};
            ${sm.columnGap ? "grid-column-gap:" + sm.columnGap : ""};
            ${sm.autoFlow ? "grid-auto-flow:" + sm.autoFlow : ""};
            ${sm.areas ? "grid-template-areas:" + sm.areas : ""};
            ${sm.height ? "height:" + sm.height : ""};
          }
        }

        @media (min-width: ${theme.breakpoints.md}) {
          .grid.grid-md {
            ${md.rows ? "grid-template-rows:" + md.rows : ""};
            ${md.autoRows ? "grid-auto-rows:" + md.autoRows : ""};
            ${md.rowGap ? " grid-row-gap:" + md.rowGap : ""};
            ${md.columns ? "grid-template-columns:" + md.columns : ""};
            ${md.autoColumns ? "grid-auto-columns:" + md.autoColumns : ""};
            ${md.columnGap ? "grid-column-gap:" + md.columnGap : ""};
            ${md.autoFlow ? "grid-auto-flow:" + md.autoFlow : ""};
            ${md.areas ? "grid-template-areas:" + md.areas : ""};
            ${md.height ? "height:" + md.height : ""};
          }
        }
        @media (min-width: ${theme.breakpoints.lg}) {
          .grid.grid-lg {
            ${lg.rows ? "grid-template-rows:" + lg.rows : ""};
            ${lg.autoRows ? "grid-auto-rows:" + lg.autoRows : ""};
            ${lg.rowGap ? " grid-row-gap:" + lg.rowGap : ""};
            ${lg.columns ? "grid-template-columns:" + lg.columns : ""};
            ${lg.autoColumns ? "grid-auto-columns:" + lg.autoColumns : ""};
            ${lg.columnGap ? "grid-column-gap:" + lg.columnGap : ""};
            ${lg.autoFlow ? "grid-auto-flow:" + lg.autoFlow : ""};
            ${lg.areas ? "grid-template-areas:" + lg.areas : ""};
            ${lg.height ? "height:" + lg.height : ""};
          }
        }
        @media (min-width: ${theme.breakpoints.xl}) {
          .grid.grid-xl {
            ${xl.rows ? "grid-template-rows:" + xl.rows : ""};
            ${xl.autoRows ? "grid-auto-rows:" + xl.autoRows : ""};
            ${xl.rowGap ? " grid-row-gap:" + xl.rowGap : ""};
            ${xl.columns ? "grid-template-columns:" + xl.columns : ""};
            ${xl.autoColumns ? "grid-auto-columns:" + xl.autoColumns : ""};
            ${xl.columnGap ? "grid-column-gap:" + xl.columnGap : ""};
            ${xl.autoFlow ? "grid-auto-flow:" + xl.autoFlow : ""};
            ${xl.areas ? "grid-template-areas:" + xl.areas : ""};
            ${xl.height ? "height:" + xl.height : ""};
          }
        }
      `}</style>
    </>
  );
};

export default Grid;

Grid.propTypes = propTypes;

Grid.defaultProps = defaultProps;

const valueFormatter = (number) => {
    return "$ " + new Intl.NumberFormat("us").format(number).toString();
};

export default valueFormatter;
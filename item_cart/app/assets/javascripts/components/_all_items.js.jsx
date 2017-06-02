// First, let’s start with listing all the items.

var AllItems = React.createClass({
    getInitialState () {
        return { items: [] }
    },

    componentDidMount () {
        $.getJSON(
            '/api/v1/items.json',
            (response) => {
                this.setState({
                    items: response
                })
            }
        );

        console.log('Component mounted');
    },

    render () {
        var items = this.state.items.map( (item) => {
            return (
                <div key={ item.id }>
                    <h3>
                        { item.name }
                    </h3>

                    <p>
                        { item.description }
                    </p>
                </div>
            );
        });

        return (
            <div>
                { items }
            </div>
        );
    }
});

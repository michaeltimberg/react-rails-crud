// Let’s test if everything is working.
// First, `<Body />`, the parent component of `<AllItems />` and `<NewItem />` must be put into the `<Main />` component.

var Body = React.createClass({
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

    handleSubmit (item) {
        var newState = this.state.items.concat(item);

        this.setState({
            items: newState
        });

        console.log(item);
    },

    render () {
        return (
            <div>
                <NewItem
                    handleSubmit={ this.handleSubmit } />

                <AllItems
                    items={ this.state.items } />
            </div>
        );
    }
});

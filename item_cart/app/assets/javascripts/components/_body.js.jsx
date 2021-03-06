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

    handleDelete (id) {
        $.ajax({
            url: '/api/v1/items/' + id,

            type: 'DELETE',

            success:() => {
                this.removeItemClient(id);

                console.log('successfully removed item')
            }
        });

        console.log('in handle delete')
    },

    handleUpdate (item) {
        $.ajax({
            url: `/api/v1/items/${item.id}`,

            type: 'PUT',

            data: {item: item},

            success: () => {
                console.log('you did it!!');

                this.updateItems(item);
            }
        });
    },

    updateItems(item) {
        var items = this.state.items.filter(
            (i) => {
                return i.id != item.id
            }
        );

        items.push(item);

        this.setState({ items: items });
    },

    removeItemClient(id) {
        var newItems = this.state.items.filter((item) => {
            return item.id != id;
        });

        this.setState({ items: newItems });
    },

    render () {
        return (
            <div>
                <NewItem
                    handleSubmit={ this.handleSubmit } />

                <AllItems
                    items={ this.state.items }

                    handleDelete={ this.handleDelete }

                    onUpdate={ this.handleUpdate } />
            </div>
        );
    }
});

// First, let’s start with listing all the items.

var AllItems = React.createClass({
    handleDelete (id) {
        this.props.handleDelete(id);

        console.log('delete item clicked')
    },

    onUpdate (item) {
        this.props.onUpdate(item);
    },

    render () {
        var items = this.props.items.map( (item) => {
            return (
                <div key={ item.id }>
                    <Item
                        item={ item }

                        handleDelete={ this.handleDelete.bind(
                            this,
                            item.id
                        ) }

                        handleUpdate={ this.onUpdate } />
                </div>
            )
        });

        return (
            <div name>
                { items }
            </div>
        );
    }
});

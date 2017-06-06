# CRUD Interface
## Rails with a React front-end

Following [this][1] guide.

Each commit will mark my progress from one `<h4>` or `<h2>` element to the next.

## Notes
I encountered [this][2] error after I completed my first, "[Adding a new item][3]," commit.

I ask and answer this issue on StackOverflow [here][4].

I also ran into the following error after completing the, "Deleting an item," commit:

>ActiveRecord::RecordNotFound (Couldn't find Item with 'id'=${id}):

and the following error in the console:

>jquery.self-bd7ddd3….js?body=1:10255 DELETE http://localhost:3000 ... 404 (Not Found)

Which were solved using one of the comments found below the article [here][5].

[1]: https://www.pluralsight.com/guides/ruby-ruby-on-rails/building-a-crud-interface-with-react-and-ruby-on-rails
[2]: https://facebook.github.io/react/warnings/refs-must-have-owner.html
[3]: https://github.com/michaeltimberg/react-rails-crud/commit/60a8fd5c5362202938eccc0838c0c0b338621aa1
[4]: https://stackoverflow.com/questions/44393803/multiple-uncaught-errors-using-the-react-rails-gem
[5]: http://disq.us/p/1ce76df
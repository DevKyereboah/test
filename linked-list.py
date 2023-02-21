nodes = [1, 2, 3, 4, 5]
def insert_node(nodes, position, value):
    nodes.insert(position, value)
    return nodes
def delete_node(nodes, position):
    del nodes[position]
    return nodes
def search_node(nodes, value):
    try:
        return nodes.index(value) + 1
    except ValueError:
        return "Element not found in the list."
nodes = insert_node(nodes, 2, 6)
print("List after inserting a node: ", nodes)
nodes = delete_node(nodes, len(nodes) - 2)
print("List after deleting a node: ", nodes)
value = input("Enter the element to search for: ")
try:
    value = int(value)
except ValueError:
    print("Invalid input. Only integers are allowed.")
result = search_node(nodes, value)
if result == "Element not found in the list.":
    while result == "Element not found in the list.":
        print("Element not found in the list. Try again.")
        value = input("Enter the element to search for: ")
        try:
            value = int(value)
        except ValueError:
            print("Invalid input. Only integers are allowed.")
        result = search_node(nodes, value)
else:
    print("Element found at position: ", result)
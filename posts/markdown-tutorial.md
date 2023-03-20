---
title: Overview of CommonMark Markdown
author: Jesse Huang
date: "2023-03-17"
---

Here is a quick overview of CommonMark Markdown, a strongly defined specification of Markdown. For more information, see <https://commonmark.org/>

# Getting Started

Create a new markdown file with the `.md` extension. (E.g. `example.md`) Then open the file with any plain text editor.

# Headings
There are two ways to create headings. One way is to prepend a hashtag in front of the desired heading title. You can have up to 6 levels of headings.

```md
# Heading 1 Title
## Heading 2 Title
### Heading 3 Title
#### Heading 4 Title
##### Heading 5 Title
###### Heading 6 Title
```

There is another way to create headings:

```md
Heading 1 Title
===============

Heading 2 Title
---------------
```

The underlines could be of any length (>= 1). As you can see however, you can only have 2 levels of headings using this method.

# Italics and Bold

**Bold text**

```md
**Bold text**
```

*Italicized text*

```md
*Italicized text*
```

You can combine both of them together to create ***bold italicized text***

```md
***bold italicized text***
```

# Paragraphs

A blank line separates each paragraph.

```md
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia vitae
orci a volutpat. Pellentesque rhoncus odio magna, ut efficitur ipsum iaculis
vitae. Duis pretium arcu quis purus ornare, in posuere felis tempor. Morbi id
magna quis nibh vehicula pellentesque sed at felis. Curabitur et molestie quam.
Quisque eu fringilla dui. Donec dictum condimentum orci, ut aliquet mauris
ullamcorper bibendum. Aenean fringilla, libero et ultrices auctor, nisi quam
condimentum ipsum, non pharetra dolor arcu cursus ipsum. Maecenas dui turpis,
malesuada vel condimentum ut, fermentum nec elit. Curabitur interdum, felis in
pretium condimentum, lectus magna malesuada urna, ut dictum ex orci non massa.
Aenean molestie hendrerit felis, eget cursus nulla vehicula quis. Donec at
fermentum felis. Sed sodales, risus ut ullamcorper luctus, sem nisl posuere leo,
eget consequat nibh enim quis magna.

Proin hendrerit sapien ac fringilla malesuada. Aenean efficitur malesuada
lectus, id tristique dolor dictum sit amet. Vivamus nec placerat dolor. Duis
auctor, sem in porttitor tincidunt, felis purus venenatis purus, auctor
dignissim massa metus ac nunc. Praesent quis ultrices neque, eu ullamcorper
nisl. Nam lacinia malesuada arcu vel venenatis. Mauris aliquam sem erat, at
aliquam mi consequat vitae. Aliquam mattis ex pharetra metus volutpat viverra.
Fusce a tincidunt sapien, eu varius purus. In dapibus rutrum aliquet. Aenean
lectus tortor, ultricies id mi pellentesque, consectetur feugiat dolor.

Duis consequat venenatis nisi, vel mollis diam porta sit amet. Sed dolor nisl,
euismod vel lorem cursus, lobortis lacinia lorem. Phasellus sollicitudin neque
vitae ultrices sollicitudin. Duis sagittis hendrerit accumsan. Praesent nec
pulvinar ligula, sit amet feugiat tellus. Etiam purus turpis, lobortis non
venenatis at, tempor vitae libero. Vivamus mi augue, cursus id nibh et, ornare
consequat nisl. 
```

**Example:**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia vitae
orci a volutpat. Pellentesque rhoncus odio magna, ut efficitur ipsum iaculis
vitae. Duis pretium arcu quis purus ornare, in posuere felis tempor. Morbi id
magna quis nibh vehicula pellentesque sed at felis. Curabitur et molestie quam.
Quisque eu fringilla dui. Donec dictum condimentum orci, ut aliquet mauris
ullamcorper bibendum. Aenean fringilla, libero et ultrices auctor, nisi quam
condimentum ipsum, non pharetra dolor arcu cursus ipsum. Maecenas dui turpis,
malesuada vel condimentum ut, fermentum nec elit. Curabitur interdum, felis in
pretium condimentum, lectus magna malesuada urna, ut dictum ex orci non massa.
Aenean molestie hendrerit felis, eget cursus nulla vehicula quis. Donec at
fermentum felis. Sed sodales, risus ut ullamcorper luctus, sem nisl posuere leo,
eget consequat nibh enim quis magna.

Proin hendrerit sapien ac fringilla malesuada. Aenean efficitur malesuada
lectus, id tristique dolor dictum sit amet. Vivamus nec placerat dolor. Duis
auctor, sem in porttitor tincidunt, felis purus venenatis purus, auctor
dignissim massa metus ac nunc. Praesent quis ultrices neque, eu ullamcorper
nisl. Nam lacinia malesuada arcu vel venenatis. Mauris aliquam sem erat, at
aliquam mi consequat vitae. Aliquam mattis ex pharetra metus volutpat viverra.
Fusce a tincidunt sapien, eu varius purus. In dapibus rutrum aliquet. Aenean
lectus tortor, ultricies id mi pellentesque, consectetur feugiat dolor.

Duis consequat venenatis nisi, vel mollis diam porta sit amet. Sed dolor nisl,
euismod vel lorem cursus, lobortis lacinia lorem. Phasellus sollicitudin neque
vitae ultrices sollicitudin. Duis sagittis hendrerit accumsan. Praesent nec
pulvinar ligula, sit amet feugiat tellus. Etiam purus turpis, lobortis non
venenatis at, tempor vitae libero. Vivamus mi augue, cursus id nibh et, ornare
consequat nisl. 

# Links

Two ways to create links:

```.md
[Check out my website!](https://jessebotics.online)

  <!-- OR -->

[Check out my website!][1]

[1]: https://jessebotics.online
```

Eg. [Check out my website!](https://jessebotics.online)
# Lists

2 types of lists you can create: unordered and ordered

```md
* Unordered List Item 1
* Unordered List Item 2
* Unordered List Item 3

- Another Unordered List Item 1
- Another Unordered List Item 2
- Another Unordered List Item 3

1. Ordered List Item
2. Ordered List Item
3. Ordered List Item
```
* Unordered List Item 1
* Unordered List Item 2
* Unordered List Item 3

- Another Unordered List Item 1
- Another Unordered List Item 2
- Another Unordered List Item 3

1. Ordered List Item
2. Ordered List Item
3. Ordered List Item

# Images

```md
![Image Alt Text (for when the image fails to load)](https://picsum.photos/200)
```

![Image Alt Text (for when the image fails to load)](https://picsum.photos/200)

# Blockquotes

```md
> “All we have to decide is what to do with the time that is given us.”
> ― J.R.R. Tolkien, The Fellowship of the Ring 
```

> “All we have to decide is what to do with the time that is given us.”
> ― J.R.R. Tolkien, The Fellowship of the Ring 

# Inline Code

```md
`inline code text: fn(a) = x`
```

`inline code text: fn(a) = x`

# Code Blocks

Two ways to create code blocks. One way is to prepend code with 4 spaces/1 tab character.

```md
    int x = 1;
    int y = x * 2 + z(x);
```

Another way is to use 3 backticks at the beginning and end of the code block.

````md
```
int x = 1;
int y = x * 2 + z(x);
```
````

Both results in

    int x = 1;
    int y = x * 2 + z(x);

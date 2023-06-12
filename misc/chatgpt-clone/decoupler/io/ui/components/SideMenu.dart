import 'package:flutter/material.dart';
import 'package:flutter_iconpicker/flutter_iconpicker.dart';
import 'package:flutter_iconpicker/types.dart';

class SideMenu extends StatelessWidget {
  final bool isOpen;
  final List<TConversationCategory> conversations;

  SideMenu({this.isOpen, this.conversations});

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: [
          Buttons(),
          Expanded(
            child: ListView.builder(
              itemCount: conversations.length,
              itemBuilder: (context, index) {
                return Category(category: conversations[index]);
              },
            ),
          ),
          // User widget can go here
        ],
      ),
    );
  }
}

class Buttons extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        // Icon for new chat button
        IconButton(
          icon: Icon(IconPack.fontAwesomeIcons['faPlus']),
          onPressed: () {
            // Handle new chat
          },
        ),
        // Icon for expand button
        IconButton(
          icon: Icon(IconPack.fontAwesomeIcons['faBook']),
          onPressed: () {
            // Handle expand
          },
        ),
      ],
    );
  }
}

class Category extends StatelessWidget {
  final TConversationCategory category;

  Category({this.category});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(category.category),
        ...category.conversations.map((conversation) {
          return Conversation(conversation: conversation);
        }).toList(),
      ],
    );
  }
}

class Conversation extends StatelessWidget {
  final Conversation conversation;

  Conversation({this.conversation});

  @override
  Widget build(BuildContext context) {
    return ListTile(
      leading: Icon(IconPack.fontAwesomeIcons['faMessage']),
      title: conversation.isEditing
          ? TextField(
              autofocus: true,
              // Controller should be set for value
            )
          : Text(conversation.name),
      trailing: conversation.isActive ? Icons(conversation) : null,
    );
  }
}

class Icons extends StatelessWidget {
  final Conversation conversation;

  Icons(this.conversation);

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        if (conversation.isEditing)
          IconButton(
            icon: Icon(IconPack.fontAwesomeIcons['faCheck']),
            onPressed: () {
              // Handle edit accept
            },
          ),
        if (conversation.isEditing)
          IconButton(
            icon: Icon(IconPack.fontAwesomeIcons['faClose']),
            onPressed: () {
              // Handle edit cancel
            },
          ),
        if (!conversation.isEditing)
          IconButton(
            icon: Icon(IconPack.fontAwesomeIcons['faEdit']),
            onPressed: () {
              // Handle edit
            },
          ),
        if (!conversation.isEditing)
          IconButton(
            icon: Icon(IconPack.fontAwesomeIcons['faTrash']),
            onPressed: () {
              // Handle remove
            },
          ),
      ],
    );
  }
}
